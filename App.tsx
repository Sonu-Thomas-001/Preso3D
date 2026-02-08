import React, { useState, useEffect, useCallback } from 'react';
import Slide3DContainer from './components/Slide3DContainer';
import UIOverlay from './components/UIOverlay';
import { AnimatePresence } from 'framer-motion';

// Import Slides
import MasteringDevOpsSlide from './components/slides/MasteringDevOpsSlide';
import AgendaSlide from './components/slides/AgendaSlide';
import OverviewOneSlide from './components/slides/OverviewOneSlide';
import OverviewTwoSlide from './components/slides/OverviewTwoSlide';
import DevOpsFoundationsSlide from './components/slides/DevOpsFoundationsSlide';
import UnderstandingDevOpsSlide from './components/slides/UnderstandingDevOpsSlide';
import EvolutionOfDevOpsSlide from './components/slides/EvolutionOfDevOpsSlide';
import EvolutionHistorySlide from './components/slides/EvolutionHistorySlide';
import WhyNeedDevOpsSlide from './components/slides/WhyNeedDevOpsSlide';
import DevOpsEngineerRoleSlide from './components/slides/DevOpsEngineerRoleSlide';
import KeyConceptsSlide from './components/slides/KeyConceptsSlide';
import BusinessBenefitsSlide from './components/slides/BusinessBenefitsSlide';
import AutomationSlide from './components/slides/AutomationSlide';
import BenefitsOfAutomationSlide from './components/slides/BenefitsOfAutomationSlide';
import ContinuousDeliverySlide from './components/slides/ContinuousDeliverySlide';
import ContinuousDeploymentSlide from './components/slides/ContinuousDeploymentSlide';
import MeasurementSlide from './components/slides/MeasurementSlide';
import FeedbackLoopsSlide from './components/slides/FeedbackLoopsSlide';
import RoleOfDevOpsSDLCSlide from './components/slides/RoleOfDevOpsSDLCSlide';
import DevOpsModelSlide from './components/slides/DevOpsModelSlide';
import DevAndBuildPhaseSlide from './components/slides/DevAndBuildPhaseSlide';
import DevOpsLifecycleSlide from './components/slides/DevOpsLifecycleSlide';
import TestingAndDeploymentPhaseSlide from './components/slides/TestingAndDeploymentPhaseSlide';
import OpsAndMonitoringPhaseSlide from './components/slides/OpsAndMonitoringPhaseSlide';
import AgileVsDevOpsSlide from './components/slides/AgileVsDevOpsSlide';
import DevOpsIntegrationAlignmentSlide from './components/slides/DevOpsIntegrationAlignmentSlide';
import AgilePrinciplesSlide from './components/slides/AgilePrinciplesSlide';
import KanbanVsScrumSlide from './components/slides/KanbanVsScrumSlide';
import ScrumAndKanbanDetailsSlide from './components/slides/ScrumAndKanbanDetailsSlide';
import LeanAndAlignmentSlide from './components/slides/LeanAndAlignmentSlide';
import AdvancedGitWorkflowsSlide from './components/slides/AdvancedGitWorkflowsSlide';
import GitFlowWorkflowSlide from './components/slides/GitFlowWorkflowSlide';
import DevelopMasterBranchSlide from './components/slides/DevelopMasterBranchSlide';
import BranchingStrategiesSlide from './components/slides/BranchingStrategiesSlide';
import FullGitFlowDiagramSlide from './components/slides/FullGitFlowDiagramSlide';
import PullRequestsSlide from './components/slides/PullRequestsSlide';
import PRWorkflowDiagramSlide from './components/slides/PRWorkflowDiagramSlide';
import CodeReviewsAndIntegrationSlide from './components/slides/CodeReviewsAndIntegrationSlide';
import GitHubFlowDiagramSlide from './components/slides/GitHubFlowDiagramSlide';
import VirtualizationVsContainerizationSlide from './components/slides/VirtualizationVsContainerizationSlide';
import VirtualMachinesDiagramSlide from './components/slides/VirtualMachinesDiagramSlide';
import ContainersDefinitionSlide from './components/slides/ContainersDefinitionSlide';
import DockerContainersDiagramSlide from './components/slides/DockerContainersDiagramSlide';
import VMsVsContainersDifferencesSlide from './components/slides/VMsVsContainersDifferencesSlide';
import ArchitectureComparisonSlide from './components/slides/ArchitectureComparisonSlide';
import EfficiencyScalabilityBenefitsSlide from './components/slides/EfficiencyScalabilityBenefitsSlide';
import ThankYouSlide from './components/slides/ThankYouSlide';

// Slide Registry
const SLIDES = [
  MasteringDevOpsSlide,
  AgendaSlide,
  OverviewOneSlide,
  OverviewTwoSlide,
  DevOpsFoundationsSlide,
  UnderstandingDevOpsSlide,
  EvolutionOfDevOpsSlide,
  EvolutionHistorySlide,
  WhyNeedDevOpsSlide,
  DevOpsEngineerRoleSlide,
  KeyConceptsSlide,
  BusinessBenefitsSlide,
  AutomationSlide,
  BenefitsOfAutomationSlide,
  ContinuousDeliverySlide,
  ContinuousDeploymentSlide,
  MeasurementSlide,
  FeedbackLoopsSlide,
  RoleOfDevOpsSDLCSlide,
  DevOpsModelSlide,
  DevAndBuildPhaseSlide,
  DevOpsLifecycleSlide,
  TestingAndDeploymentPhaseSlide,
  OpsAndMonitoringPhaseSlide,
  AgileVsDevOpsSlide,
  DevOpsIntegrationAlignmentSlide,
  AgilePrinciplesSlide,
  KanbanVsScrumSlide,
  ScrumAndKanbanDetailsSlide,
  LeanAndAlignmentSlide,
  AdvancedGitWorkflowsSlide,
  GitFlowWorkflowSlide,
  DevelopMasterBranchSlide,
  BranchingStrategiesSlide,
  FullGitFlowDiagramSlide,
  PullRequestsSlide,
  PRWorkflowDiagramSlide,
  CodeReviewsAndIntegrationSlide,
  GitHubFlowDiagramSlide,
  VirtualizationVsContainerizationSlide,
  VirtualMachinesDiagramSlide,
  ContainersDefinitionSlide,
  DockerContainersDiagramSlide,
  VMsVsContainersDifferencesSlide,
  ArchitectureComparisonSlide,
  EfficiencyScalabilityBenefitsSlide,
  ThankYouSlide
];

const App: React.FC = () => {
  // --- State ---
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPresenting, setIsPresenting] = useState(false);
  const [animKey, setAnimKey] = useState(0); // Force re-render for transitions
  
  // Presentation Features State
  const [isBlackScreen, setIsBlackScreen] = useState(false);
  const [isWhiteScreen, setIsWhiteScreen] = useState(false);

  // --- Actions ---
  const nextSlide = useCallback(() => {
    setSlideIndex((prev) => (prev + 1) % SLIDES.length);
    setAnimKey((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setSlideIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setAnimKey((prev) => prev + 1);
  }, []);

  const togglePresentationMode = () => {
    if (!isPresenting) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsPresenting(true);
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
      setIsPresenting(false);
    }
  };

  // --- Event Listeners ---
  
  // Handle Font Scaling for Presentation Mode
  useEffect(() => {
    const handleResize = () => {
      // Only apply scaling if presenting AND we are NOT on the first slide (index 0)
      if (isPresenting && slideIndex !== 0) {
        // Calculate scale based on a reference width of 1280px.
        // We apply a boost (1.35x) to ensure text is large and readable on projectors/screens.
        const referenceWidth = 1280;
        const scale = (window.innerWidth / referenceWidth) * 1.35;
        // Clamp minimum scale to prevent it becoming too small
        const finalScale = Math.max(0.8, scale);
        document.documentElement.style.fontSize = `${finalScale * 100}%`;
      } else {
        document.documentElement.style.fontSize = '';
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.documentElement.style.fontSize = '';
    };
  }, [isPresenting, slideIndex]);

  // Handle Fullscreen Change (User presses Esc)
  useEffect(() => {
    const handleFsChange = () => {
      if (!document.fullscreenElement) {
        setIsPresenting(false);
        setIsBlackScreen(false);
        setIsWhiteScreen(false);
      }
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Handle Keyboard Navigation & Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      switch(e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          prevSlide();
          break;
        case 'b':
        case 'B':
          if (isPresenting) setIsBlackScreen(prev => !prev);
          break;
        case 'w':
        case 'W':
          if (isPresenting) setIsWhiteScreen(prev => !prev);
          break;
        case 'Escape':
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slideIndex, isPresenting, nextSlide, prevSlide]);

  // Determine Current Slide Component
  const CurrentSlideComponent = SLIDES[slideIndex];

  return (
    <div 
      className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 perspective-1000 overflow-hidden relative"
      onClick={isPresenting ? nextSlide : undefined}
    >
      
      {/* 3D Scene */}
      <div key={animKey} className={`w-full h-full transition-all duration-500 ease-in-out`}>
        <Slide3DContainer isPresenting={isPresenting}>
          <CurrentSlideComponent isPresenting={isPresenting} />
        </Slide3DContainer>
      </div>

      {/* Presentation Overlays (Black/White Screen) */}
      {isPresenting && isBlackScreen && (
        <div className="absolute inset-0 bg-black z-[100]" />
      )}
      {isPresenting && isWhiteScreen && (
        <div className="absolute inset-0 bg-white z-[100]" />
      )}

      {/* UI Controls */}
      <AnimatePresence>
        {!isPresenting && (
          <UIOverlay 
            currentIndex={slideIndex}
            totalSlides={SLIDES.length}
            onNext={(e) => { e.stopPropagation(); nextSlide(); }}
            onPrev={(e) => { e.stopPropagation(); prevSlide(); }}
            onPresent={togglePresentationMode}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;