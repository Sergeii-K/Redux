
function Card (props) {
  const { starships } = props;
    return (
      <main>

        <div className='list'>
          <div>
          <ul>
              {starships.map((starship) => (
              <li key={starship.name}>{starship.name}</li>
              ))}
            </ul>
          </div>
        
          <div>
            <ul>
              {starships.map((starship) => (
              <li key={starship.passengers}> Количество пасажиров :     {starship.passengers}</li>
              ))}
            </ul>
         </div>
      </div>

      </main>
    )
  }


export default Card