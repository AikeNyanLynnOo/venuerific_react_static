import { Box, Step, StepConnector, StepLabel, Stepper } from "@mui/material";
import { styled } from "@mui/system";
import { CheckCircle } from "@phosphor-icons/react";

import { COLORS } from "@/styles/colors";
import { fontVnf } from "@/config/fonts";
// Custom styles for step icons
const StepIconContainer = styled("div")<{
  active: boolean;
  completed: boolean;
}>(({ active, completed, theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: completed ? "auto" : 24,
  height: completed ? "auto" : 24,
  borderRadius: completed ? "24px" : "50%",
  backgroundColor: active
    ? "transparent"
    : completed
      ? `${COLORS.success[200]}`
      : `${COLORS.secondary[300]}`,
  color: active ? `${COLORS.primary[600]}` : "#FFFFFF",
  padding: completed ? "4px 12px" : "0",
  border: completed ? `1px solid ${COLORS.success[300]}` : "none",
}));

// Custom connector styles
const CustomStepConnector = styled(StepConnector)({
  "& .MuiStepConnector-line": {
    borderTopWidth: 2,
    borderColor: COLORS.secondary[300],
  },
});

interface StepIconProps {
  active: boolean;
  completed: boolean;
  stepNumber: number;
}

const StepIcon = ({ active, completed, stepNumber }: StepIconProps) => {
  return (
    <StepIconContainer active={active} completed={completed}>
      {completed ? (
        <CheckCircle color={COLORS.success[500]} size={22} weight="bold" />
      ) : (
        <span
          className={`text-sm font-bold leading-6 ${active ? `${COLORS.primary[600]}` : "#FFFFFF"}`}
        >
          {stepNumber}
        </span>
      )}
    </StepIconContainer>
  );
};

interface EnquiryStepperProps {
  steps: string[];
  activeStep: number;
}

export const EnquiryStepper = ({ steps, activeStep }: EnquiryStepperProps) => {
  return (
    <Box sx={{ width: "100%", my: 2 }}>
      <Stepper activeStep={activeStep} connector={<CustomStepConnector />}>
        {steps.map((step, index) => (
          <Step
            key={index}
            sx={{
              "&.MuiStep-horizontal": {
                pl: index === 0 ? 0 : 0.5,
                pr: index === 2 ? 0 : 0.5,
              },
              "& .MuiStepLabel-iconContainer": {
                pr: (index === 2 && activeStep === 1 && 0) || 0,
              },
            }}
          >
            <StepLabel
              StepIconComponent={() => (
                <StepIcon
                  active={activeStep === index}
                  completed={activeStep > index}
                  stepNumber={index + 1}
                />
              )}
              sx={{
                "&.MuiStepLabel-root": {
                  pl: 0,
                },
                "& .MuiStepLabel-label": {
                  fontFamily: fontVnf.style.fontFamily,
                },
                border:
                  activeStep === index
                    ? `1px solid ${COLORS.primary[200]}`
                    : "none",
                borderRadius: 6,
                backgroundColor:
                  activeStep === index
                    ? `${COLORS.primary[100]}`
                    : "transparent",
                py: 0.5,
                px: activeStep === index ? 1 : 0,
                pl: activeStep === index ? 0.5 : 1,
                pr: activeStep === index ? 1 : 0,
              }}
            >
              {activeStep === index && (
                <span
                  className={`text-sm font-normal leading-6 ${activeStep === index ? "text-primary-700" : ""}`}
                >
                  {step}
                </span>
              )}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
