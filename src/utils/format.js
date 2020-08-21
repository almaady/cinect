export function classes(...classList) {
  return classList.filter(c => c).join("  ");
}
