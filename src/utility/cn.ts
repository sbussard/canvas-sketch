// simple utility to join strings together
// for use with className
export default function cn(...args: any[]) {
  return args.filter(Boolean).join(' ');
}
