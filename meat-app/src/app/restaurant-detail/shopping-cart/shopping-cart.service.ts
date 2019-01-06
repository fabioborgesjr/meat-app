import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

export class ShoppingCartService {
    items: CartItem[] = []

    clear() {
        this.items = []
    }

    total(): number {
        return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 1)
    }

    add(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        foundItem ? foundItem.quantity++ : this.items.push(new CartItem(item))
    }

    remove(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 0)
    }
}