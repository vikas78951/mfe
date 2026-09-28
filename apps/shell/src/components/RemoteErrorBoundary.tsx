import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

export class RemoteErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Remote MFE failed:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section>
          <h2>Accounts is unavailable</h2>
          <p>Please try again later.</p>
        </section>
      );
    }

    return this.props.children;
  }
}
