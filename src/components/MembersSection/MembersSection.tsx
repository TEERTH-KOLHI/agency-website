"use client";
import React from "react";
import { Users } from "lucide-react";
import { useTranslation } from "react-i18next";

interface MembersSectionProps {
  avatars: string[];
  memberCount: number | string;
}

const MembersSection: React.FC<MembersSectionProps> = ({
  avatars,
  memberCount,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center gap-4">
      {/* Avatars */}
      <div className="flex -space-x-3">
        {avatars.map((avatar, index) => (
          <img
            key={index}
            src={avatar}
            alt={`Member ${index + 1}`}
            className="w-12 h-12 rounded-full border-2 border-purple-500 object-cover"
          />
        ))}
      </div>

      {/* Member Count */}
      <div className="flex items-center gap-2">
        <Users className="w-5 h-5" />
        <h1 className="font-bold text-3xl">
          {memberCount}+ {t("membersSection.members")}
        </h1>
      </div>
    </div>
  );
};

export default MembersSection;
