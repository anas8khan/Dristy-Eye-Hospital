import { useMemo } from "react";
import { useLanguage } from "./context/LanguageContext";
import treatmentsEn from "./pages/Treatment/treatmentData.json";
import treatmentsHi from "./pages/Treatment/treatmentData.hi.json";
import projectsEn from "./data.json";
import projectsHi from "./data.hi.json";
import doctorsEn from "./doctorData.json";
import doctorsHi from "./doctorData.hi.json";

// Hindi data files keep the English `name` field as a stable id (used in URLs),
// so lookups always match on the English name and only the displayed text changes.
const pick = (isHi, en, hiData) => (isHi ? hiData : en);

export const useTreatments = () => {
  const { isHi } = useLanguage();
  return useMemo(() => pick(isHi, treatmentsEn, treatmentsHi), [isHi]);
};

export const useProjects = () => {
  const { isHi } = useLanguage();
  return useMemo(() => pick(isHi, projectsEn, projectsHi), [isHi]);
};

export const useDoctors = () => {
  const { isHi } = useLanguage();
  return useMemo(
    () => (isHi ? doctorsHi.doctors : doctorsEn.doctors).map((d) => ({ ...d, displayName: (isHi && d.displayName) || d.name })),
    [isHi]
  );
};
