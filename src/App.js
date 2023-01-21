import './App.css'
import Components from './Components'

function App() {
  return (
    <div className="App">
      <div className="lengthblock">
        <p className="border">Популярное</p>
        <p className="border">Рынок</p>
        <p className="border">Прочее</p>
      </div>
      <div className="things">
        <Components
          img={
            'https://cdn.forbes.ru/forbes-static/new/2021/12/75f-61c1f76ccde7d.jpg'
          }
          price={10000123}
         
          name={'Обезяна NFT'}
        />
        <Components
          img={
            'https://i.pinimg.com/originals/b4/92/a9/b492a9b45f98c8a203ae66ab1eef252d.jpg'
          }
          price={123110000}
          maxprise={87135123123}
          name={'Обезяна NFT'}
        />
        <Components
          img={
            'https://cdn.igromania.ru/mnt/news/f/0/9/0/2/0/115641/5e22958db7e4dace_1920xH.jpg'
          }
          price={10000123}
        
          name={'Обезяна NFT'}
        />
        <Components
          img={
            'https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=cb647d991d8897cc8a81d2c33c4406d5'
          }
          price={123124}
          maxprise={87135123123}
          name={'Обезяна NFT'}
        />
        <Components
          img={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgUXsBE8vP1wTPLFFatVL0n2PChk6dFnKVsu4PbYmvwynXLpcVvDBwNEqcRsh8odIoLhY&usqp=CAU'
          }
          price={12100010000}
          maxprise={87135123123}
          name={'Обезяна NFT'}
        />
        <Components
          img={
            'https://www.cnet.com/a/img/resize/e547a2e4388fcc5ab560f821ac170a59b9fb0143/hub/2021/12/13/d319cda7-1ddd-4855-ac55-9dcd9ce0f6eb/unnamed.png?auto=webp&fit=crop&height=1200&width=1200'
          }
          price={123124123}
          maxprise={871351231231}
          name={'Обезяна NFT'}
          
        />
      </div>
    </div>
  )
}

export default App
