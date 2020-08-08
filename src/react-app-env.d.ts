/// <reference types="react-scripts" />

interface Ichildren {
  children?: React.ReactNode;
}
interface Icontainer {
  className?: string;
}
interface Idata {
  code: number;
  data: any;
  message: string;
}
type Iwrapper = Ichildren & Icontainer