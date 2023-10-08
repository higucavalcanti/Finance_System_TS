import { useEffect, useState } from 'react';
import * as C from './App.styles';
import { items } from './data/items';
import { FilterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { Item } from './types/Item';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/TableArea/InfoArea';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);

  useEffect(()=>{
    setFilteredList( FilterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        
        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
        />

        {/* Área de inserção */}

        <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
  );
}

export default App;