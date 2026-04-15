"use client";

import { useState, useEffect } from "react";
import { SetupPage } from "./components/setup-page";
import { PortalHome, PortalSkeleton } from "./components/portal-home";
import { OnboardingDialog } from "./components/onboarding-dialog";
import { PortalWelcomeDialog } from "./components/portal-welcome-dialog";
import { ProductTour, INITIAL_TOUR_STEPS, PORTAL_TOUR_STEPS } from "./components/product-tour";

type Screen = "setup" | "portal-skeleton" | "portal";
type TourType = "setup" | "portal" | null;

export default function Home() {
  const [screen, setScreen] = useState<Screen>("setup");
  const [showOnboardingDialog, setShowOnboardingDialog] = useState(false);
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(false);
  const [activeTour, setActiveTour] = useState<TourType>(null);

  useEffect(() => {
    // When all setup steps are done → show onboarding dialog
    const handleConclusao = () => {
      setShowOnboardingDialog(true);
    };

    // When user clicks to go to portal → transition
    const handlePortalTransition = () => {
      setScreen("portal-skeleton");
      // Show skeleton for 1.5s, then reveal portal + welcome dialog
      setTimeout(() => {
        setScreen("portal");
        setTimeout(() => {
          setShowWelcomeDialog(true);
        }, 800);
      }, 1500);
    };

    // When user accepts tour from home-page welcome modal (setup tour)
    const handleStartProductTour = () => {
      setActiveTour("setup");
    };

    window.addEventListener("open-conclusao-dialog", handleConclusao);
    window.addEventListener("start-portal-transition", handlePortalTransition);
    window.addEventListener("start-product-tour", handleStartProductTour);

    return () => {
      window.removeEventListener("open-conclusao-dialog", handleConclusao);
      window.removeEventListener("start-portal-transition", handlePortalTransition);
      window.removeEventListener("start-product-tour", handleStartProductTour);
    };
  }, []);

  return (
    <>
      {/* Main screen */}
      {screen === "setup" && <SetupPage />}
      {screen === "portal-skeleton" && <PortalSkeleton />}
      {screen === "portal" && <PortalHome />}

      {/* Onboarding dialog (after completing setup) */}
      {showOnboardingDialog && (
        <OnboardingDialog
          onClose={() => setShowOnboardingDialog(false)}
          onStartTour={() => {
            setShowOnboardingDialog(false);
            // Trigger portal transition
            setScreen("portal-skeleton");
            setTimeout(() => {
              setScreen("portal");
              setTimeout(() => {
                setShowWelcomeDialog(true);
              }, 800);
            }, 1500);
          }}
        />
      )}

      {/* Portal welcome dialog */}
      {showWelcomeDialog && (
        <PortalWelcomeDialog
          onClose={() => setShowWelcomeDialog(false)}
          onStartTour={() => {
            setShowWelcomeDialog(false);
            setTimeout(() => {
              setActiveTour("portal");
            }, 300);
          }}
        />
      )}

      {/* Product tours */}
      {activeTour === "setup" && (
        <ProductTour
          steps={INITIAL_TOUR_STEPS}
          onClose={() => setActiveTour(null)}
        />
      )}
      {activeTour === "portal" && (
        <ProductTour
          steps={PORTAL_TOUR_STEPS}
          onClose={() => setActiveTour(null)}
        />
      )}
    </>
  );
}
