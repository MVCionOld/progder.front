import React, {Component} from 'react';
import './CircularMenu.css';


export class CircularMenu extends Component {

    componentDidMount() {
        [...document.querySelectorAll('.circular-menu')]
            .map((menu) => {
                let items = menu.querySelectorAll('.circular-menu__item');
                let button = menu.querySelector('.circular-menu__button');
                let active = false;
                const menuItemsAmount = items.length;
                const arc = Math.PI / 2 / (menuItemsAmount - 1);
                const radius = 60;
                button.addEventListener('click', event => {
                    event.preventDefault();
                    active = !active;
                    if (active) {
                        button.classList.add('circular-menu__button_active');
                        for (let i = 0; i < menuItemsAmount; ++i) {
                            const angle = i * arc - Math.PI;
                            const x = radius * Math.cos(angle);
                            const y = radius * Math.sin(angle);
                            items[i].style.left = 50 + x + '%';
                            items[i].style.top = 50 + y + '%';
                        }
                    } else {
                        button.classList.remove('circular-menu__button_active');
                        for (let item of items) {
                            item.removeAttribute('style');
                        }
                    }
                });
                return menu;
            });
    }

    render() {
        const MenuItem = (props) => (
            <a href={props.href} className="circular-menu__item">{props.text}</a>
        );
        let actions = [
            {
                "name": "HTML",
                "href": "#"
            },
            {
                "name": "CSS",
                "href": "#"
            },
            {
                "name": "JS",
                "href": "#"
            },
            {
                "name": "TS",
                "href": "#"
            }
        ];
        return (
            <div className="circular-menu">
                {actions.map(
                    (action) => <MenuItem href={action.href} text={action.name}/>
                )}
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="circular-menu__button">
                    <span className="circular-menu__lines"/>
                </a>
            </div>
        )
    }
}
