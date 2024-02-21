import OtherSection from "@/app/UI/admin/home/OtherSection";
import StudentSection from "@/app/UI/admin/home/StudentSection";
import TeacherSection from "@/app/UI/admin/home/TeacherSection";
import UniversitySection from "@/app/UI/admin/home/UniversitySection";
import React from "react";

export default function AdminPage() {
  return (
    <div className="grid grid-cols-2 w-full gap-6 p-10">
      <UniversitySection />
      <TeacherSection />
      <StudentSection />
      <OtherSection />
    </div>
  );
}
