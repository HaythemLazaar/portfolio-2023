export default function Button(variant: string, children: any) {
  if (variant === "solid")
    return <button className="bg-brand">{children}</button>;
  if (variant === "outlined")
    return <button className="bg-brand">{children}</button>;
}
