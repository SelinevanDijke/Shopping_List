import React from 'react'
import App from '/Users/selinevandijke/Documents/Shopping-List/my-shopping-list/src/App.js';
import ListItem from './ListItem'
    
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groceryItems: [
                { id: 1, title: "Bread" },
                { id: 2, title: "Coffee" },
                { id: 3, title: "Banana"}
            ],
        }
    }
    
    onItemClick(item) {
        console.log(`Clicked ${item.id}: ${item.title}`);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.groceryItems.map((item) => (
                        <ListItem
                            key={item.id}
                            item={item}
                            clickItem={() => this.onItemClick(item)}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default List