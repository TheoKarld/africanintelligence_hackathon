
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useTourLMS } from '@/contexts/TourLMSContext';
import { useNavigate } from 'react-router-dom';
import { enrollInCourse, syncEnrollmentData } from '@/api/courseService';
import { subscribeToCourseNotifications } from '@/api/notificationService';
import { useToast } from '@/hooks/use-toast';
import EnrollmentDialog from './EnrollmentDialog';
import { clg } from '../../lib/basic';

const EnrollButton = ({ course, isEnrolled, className }) => {
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const { user,token, CoursesHub, setCoursesHub,packLoad } = useTourLMS();
  const navigate = useNavigate();
  const { toast } = useToast();
  clg('button course --',token);
  console.log(user)

  const handleEnrollment = async () => {
    setLoading(true);
    try {
      // Enroll in the course
      const result = await enrollInCourse(course.key, token);
      
      // Try to subscribe to push notifications for this course
      try {
        await subscribeToCourseNotifications(course.key, token);
        console.log('Successfully subscribed to course notifications');
      } catch (notificationError) {
        console.error('Failed to subscribe to course notifications:', notificationError);
      }
      
      toast({
        title: "Enrollment successful!",
        description: "You have been enrolled in this course. You can now access all course materials.",
        variant: "success",
      });
      
      // Close the dialog immediately after success (but keep loading true to prevent double clicks)
      setShowDialog(false);
      
      // Update the course in CoursesHub to reflect the enrollment immediately
      if (CoursesHub && CoursesHub.length > 0) {
        const updatedCourses = CoursesHub.map(c => {
          if (c._id === course._id) {
            return {
              ...c,
              enrolled: (c.enrolled || 0) + 1,
              enrolledStudents: [...(c.enrolledStudents || []), user.id],
              isEnrolled: true
            };
          }
          return c;
        });
        setCoursesHub(updatedCourses);
      }
      
      // Reload course data and navigate
      await packLoad(user);
      navigate(`/student/courses/${course.key}`);
      
    } catch (error) {
      console.error('Enrollment failed:', error);
      toast({
        title: "Enrollment failed",
        description: error.response?.data?.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = () => {
    // Redirect to login if not authenticated
    if (!user) {
      navigate('/login', { state: { from: `/courses/${course.key}` } });
      return;
    }

    // If already enrolled, navigate to course content
    if (isEnrolled) {
      navigate(`/student/courses/${course.key}`);
      return;
    }

    // Otherwise, show enrollment dialog
    setShowDialog(true);
  };

  return (
    <>
      <Button 
        className={`bg-red-600 hover:bg-red-700 text-white ${className}`} 
        onClick={handleButtonClick} 
        disabled={loading}
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
            <span>Processing...</span>
          </div>
        ) : isEnrolled ? (
          'Continue Learning'
        ) : (
          'Enroll Now'
        )}
      </Button>
      
      <EnrollmentDialog 
        open={showDialog} 
        onOpenChange={setShowDialog} 
        course={course}
        onConfirm={handleEnrollment}
        isLoading={loading}
      />
    </>
  );
};

export default EnrollButton;
