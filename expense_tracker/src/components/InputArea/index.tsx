import { Item } from '../../types/Item';
import * as C from './styles';

type Props = {
    onAdd: (item: Item) => void
}

export const InputArea = ({ onAdd }: Props) => {
    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(),
            category: '',
            title: '',
            value: 0
        }
        onAdd(newItem);
    }

    return (
        <C.Container>
            <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    );
};