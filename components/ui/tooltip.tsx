import * as React from "react";

const Tooltip = ({ text, position, children }: { text: string; position: string; children: React.ReactNode }) => {
  return (
    <div className={`tooltip tooltip-${position}`}>
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );
};

const TooltipProvider = ({ children }: { children: React.ReactNode }) => {
  return <div className="tooltip-provider">{children}</div>;
};

const TooltipTrigger = ({ asChild, children }: { asChild?: boolean; children: React.ReactNode }) => {
  return <div className="tooltip-trigger">{children}</div>;
};

const TooltipContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="tooltip-content">{children}</div>;
};

// Add default export
export default Tooltip;

// Keep named exports
export { TooltipProvider, TooltipTrigger, TooltipContent };