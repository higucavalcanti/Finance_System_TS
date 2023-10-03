import { useEffect, useState } from 'react';
import * as C from './App.styles';
import { items } from './data/items';
import { FilterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { Item } from './types/Item';
import { TableArea } from './components/TableArea';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);

  useEffect(()=>{
    setFilteredList( FilterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        
        {/* Área de informações */}

        {/* Área de inserção */}

        <TableArea />

      </C.Body>
    </C.Container>
  );
}

export default App;