export const createElement = (type: string, props: string,...children: any[]) => {
    const parent = document.createElement(type);
    if(props) {
        parent.style.cssText = props;
    }

    children.forEach(c => {
        if (typeof c === "string") {
            const textNode = document.createTextNode(c);
            parent.appendChild(textNode);
        } else {
            parent.appendChild(c);
        }
    });

    return parent;
};
export const render = (element: any) => {
    return document.getElementById("root").appendChild(element);
}

export const Yarnova = {
    createElement,
    render
}
