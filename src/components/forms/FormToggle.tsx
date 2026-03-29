"use client";

import { Button } from "@/components/ui/button";

type FormToggleProps = {
  isConsultation: boolean;
  onToggle: (isConsultation: boolean) => void;
};

export function FormToggle({ isConsultation, onToggle }: FormToggleProps) {
  return (
    <div className="mb-8 flex justify-center gap-2">
      <Button
        variant={!isConsultation ? "default" : "outline"}
        onClick={() => onToggle(false)}
        className={!isConsultation ? "bg-accent text-accent-foreground" : ""}
      >
        General Inquiry
      </Button>
      <Button
        variant={isConsultation ? "default" : "outline"}
        onClick={() => onToggle(true)}
        className={isConsultation ? "bg-accent text-accent-foreground" : ""}
      >
        Piano Consultation
      </Button>
    </div>
  );
}
