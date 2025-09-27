import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AssessmentFormContextType {
  isFormOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const AssessmentFormContext = createContext<AssessmentFormContextType | undefined>(undefined);

export function AssessmentFormProvider({ children }: { children: ReactNode }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <AssessmentFormContext.Provider value={{ isFormOpen, openForm, closeForm }}>
      {children}
    </AssessmentFormContext.Provider>
  );
}

export function useAssessmentForm() {
  const context = useContext(AssessmentFormContext);
  if (context === undefined) {
    throw new Error('useAssessmentForm must be used within an AssessmentFormProvider');
  }
  return context;
}
