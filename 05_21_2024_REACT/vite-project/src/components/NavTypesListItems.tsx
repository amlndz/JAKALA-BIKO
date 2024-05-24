export const navTypesListItems = () => {
  return (
    <nav className="tab-menu">
      <ul className="tab-container">
        <li className="tab tab--active">
          Todos <span className="circle">3</span>
        </li>
        <li className="tab">
          Pendientes <span className="circle">2</span>
        </li>
        <li className="tab">
          Completados <span className="circle">1</span>
        </li>
      </ul>
    </nav>
  );
};
