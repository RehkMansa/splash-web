interface IChildren {
  children: React.ReactNode;
}

interface IClass {
  className?: string;
}

interface IProps {
  children: React.ReactNode;
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ComponentProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> =
  React.ComponentProps<T>;
