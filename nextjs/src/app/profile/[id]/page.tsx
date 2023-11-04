"use client";

export default function userProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      Profile Page {params.id}
    </div>
  );
}
