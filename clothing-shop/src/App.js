const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats'
    },
    {
      id: 2,
      title: 'Sneakers'
    },
    {
      id: 3,
      title: 'Jackets'
    },
    {
      id: 4,
      title: 'Womens'
    },
    {
      id: 5,
      title: 'Mens'
    }
  ];

  return (
    <div className='container-categories'>
      {categories.map(({ title }) => (
          <div classname='category-container'>
            <div classname='background-image' />
            <div className='category-body-container'>
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default App;
