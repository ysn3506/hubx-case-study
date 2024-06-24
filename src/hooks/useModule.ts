import { createContext, useState, useCallback } from "react";
import { IModule } from "../models/module.interface";
import documentScannerIcon from "../assets/icon/documentScanner.svg";
import signStampIcon from "../assets/icon/certified.svg";
import batchScanningIcon from "../assets/icon/batchScanning.svg";
import advancedFiltersIcon from "../assets/icon/advancedFilters.svg";
import exportIcon from "../assets/icon/export.svg";

export interface ModuleContextData {
  modules: IModule[];
  activeModule: IModule;
  selectModule: (module: IModule) => void;
}

export const moduleDefaultValue: ModuleContextData = {
  modules: [
    {
      id: 0,
      icon: documentScannerIcon,
      title: "Document Scanner",
      subtitle: "Scan with Ease",
      explanation:
        "Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.",
      isActive: true,
    },
    {
      id: 1,
      icon: signStampIcon,
      title: "Sign & Stamp",
      subtitle: "One-Tap Focus",
      explanation:
        "Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!",
      isActive: false,
    },
    {
      id: 2,
      icon: batchScanningIcon,
      title: "Batch Scanning",
      subtitle: "Multiple Page Scan",
      explanation:
        "Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.",
      isActive: false,
    },
    {
      id: 3,
      icon: advancedFiltersIcon,
      title: "Advanced Filters",
      subtitle: "Unique Filters",
      explanation:
        "Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.",
      isActive: false,
    },
    {
      id: 4,
      icon: exportIcon,
      title: "Export & Share",
      subtitle: "All-Round Conversion",
      explanation: "Export your scans as PDF,JPG,ZIP,TXT and Word.",
      isActive: false,
    },
  ],
  activeModule: {
    id: 0,
    icon: documentScannerIcon,
    title: "Document Scanner",
    subtitle: "Scan with Ease",
    explanation:
      "Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.",
    isActive: true,
  },
  selectModule: () => null,
};

export const ModuleContext = createContext<ModuleContextData | undefined>(
  undefined,
);

export function useModuleContext(): ModuleContextData {
  const [modules, setModules] = useState<IModule[]>(moduleDefaultValue.modules);
  const [activeModule, setActiveModule] = useState<IModule>(
    moduleDefaultValue.activeModule,
  );

  const selectModule = (module: IModule) => {
    setActiveModule(module);
    const updatedModules = modules.map((m) => {
      m.isActive = false;
      if (m.id === module.id) {
        m.isActive = true;
      }
      return m;
    });
    setModules(updatedModules);
  };

  return {
    modules,
    activeModule,
    selectModule,
  };
}
