export default  function Footer() {
  return (
    <footer className="py-10 text-center text-text-secondary border-t border-white/5">
      <p className="text-base">
        &copy; {new Date().getFullYear()} Akash Patil. All rights reserved.
      </p>
    </footer>
  );
}