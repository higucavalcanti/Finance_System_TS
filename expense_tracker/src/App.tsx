import { useEffect, useState } from 'react';
import * as C from './App.styles';
import { items } from './data/items';
import { getCurrentMonth } from './helpers/dateFilter';
import { Item } from './types/Item';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);

  useEffect(()=>{

  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        
        {/* Área de informações */}

        {/* Área de inserção */}

        {/* Tabela de itens */}

      </C.Body>
    </C.Container>
  );
}

export default App;