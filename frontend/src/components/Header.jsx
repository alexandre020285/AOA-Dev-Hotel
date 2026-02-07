import React from "react";

const Header = () => {
  return (
    <div className="shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2">
          <img src="./public/Logo.png" alt="Logo" className="h-10" />
          <p className=""> AOA - Dev Hotéis </p>
        </div>
        <div> Procura</div>
        <div>Perfil</div>
      </div>
    </div>
  );
};

export default Header;
