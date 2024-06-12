export function Navbar() {
  return (
    <nav className="w-full p-4 text-brand-light border-b-2 border-brand-light flex items-center">
      LearningMatch
      <ul className="flex justify-end gap-4 w-full">
        <li>
          <a href="/universities">Universities</a>
        </li>
        <li>
          <a href="/profile">My profile</a>
        </li>
      </ul>
    </nav>
  );
}
