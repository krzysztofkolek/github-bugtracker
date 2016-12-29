import React from 'react';

export function workRepository(subMenuCategory) {
    switch (subMenuCategory) {
        case 'BACKLOG':
            return [             
                <div key="a" data-grid={{x: 0, y: 0, w: 1, h: 2, static: true}}>a1</div>,
                <div key="b" data-grid={{x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4}}>b</div>,
                <div key="c" data-grid={{x: 4, y: 0, w: 1, h: 2}}>c</div>
            ];            
        case 'QUERIES':
            return [             
                <div key="a" data-grid={{x: 0, y: 0, w: 1, h: 2, static: true}}>a2</div>,
                <div key="b" data-grid={{x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4}}>b</div>,
                <div key="c" data-grid={{x: 4, y: 0, w: 1, h: 2}}>c</div>
            ];            
    }
    return <div></div>;
}