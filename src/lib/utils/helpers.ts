export const createInitials = (name: string = '', letterCount: number = 2) => {
  if (!name) return '';

  const nameParts = name.trim().split(' ');
  let initials = '';

  for (let i = 0; i < Math.min(letterCount, nameParts.length); i++) {
    initials += nameParts[i].charAt(0).toUpperCase();
  }

  return initials;
};
