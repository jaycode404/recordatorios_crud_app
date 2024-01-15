export default   NavigationItem = ({ to, text }) => (
    <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
      <NavLink to={to} className="flex items-center hover:text-blue-500 transition-colors">
        <DarkModeIcon className="mr-1" /> {/* Icono de modo oscuro */}
        {text}
      </NavLink>
    </Typography>
  );