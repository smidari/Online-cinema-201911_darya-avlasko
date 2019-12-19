let state = {
    thFilmData: [
        {th: 'Id', scope: 'col'},
        {th: 'Title', scope: 'col'},
        {th: 'Picture', scope: 'col'},
        {th: 'Description', scope: 'col'},
        {th: 'Ticket price', scope: 'col'},
        {th: 'Start date', scope: 'col'},
        {th: 'End date', scope: 'col'},
        {th: 'Tags', scope: 'col'},
        {th: 'Remove', scope: 'col'},
    ],
    thUsesrData: [
        {th: 'Id', scope: 'col'},
        {th: 'First name', scope: 'col'},
        {th: 'Last name', scope: 'col'},
        {th: 'Email', scope: 'col'},
        {th: 'Remove request', scope: 'col'},
    ],
    trUsers: [
        {id: '0', fname: 'Daria', lname: 'Smirnova', email: 'sda@gamail.com', remove: 'remove'},
        {id: '1', fname: 'Ivan', lname: 'Ivanov', email: 'vanivanov@gamail.com', remove: 'remove'},
        {id: '2', fname: 'Kirill', lname: 'Petrov', email: 'petrov@gamail.com', remove: 'remove'},
        {id: '3', fname: 'Ivan', lname: 'Ivanov', email: 'vanivanov@gamail.com', remove: 'remove'},
        {id: '4', fname: 'Kirill', lname: 'Petrov', email: 'petrov@gamail.com', remove: 'remove'},
        {id: '5', fname: 'Ivan', lname: 'Ivanov', email: 'vanivanov@gamail.com', remove: 'remove'},
        {id: '6', fname: 'Kirill', lname: 'Petrov', email: 'petrov@gamail.com', remove: '&times;'},
    ],


    adminNav: [
        {class: 'nav-item', classNav: 'nav-link', to: '/admin/films', name: 'List films'},
        {class: 'nav-item', classNav: 'nav-link', to: '/admin/users', name: 'List users'},
    ],
    dataCarusel: [
        {alt: 'film', src: 'https://s3.vcdn.biz/static/f/1914745521/image.jpg/pt/r0x0x4'},
        {alt: 'film', src: 'https://s7.vcdn.biz/static/f/1922095141/image.jpg/pt/r0x0x4'},
        {alt: 'film', src: 'https://s3.vcdn.biz/static/f/1885584981/image.jpg/pt/r0x0x4'},
    ],
    dataNav: [
        {href: '/admin', name: 'Admin'},
        {href: '/user', name: 'User'},
    ],
    dataNavAdmin: [
        {href: '/admin/films', name: 'Films'},
        {href: '/admin/users', name: 'Users'},
    ],
    dataNavUser: [
        {href: '/user/myacount', name: 'My acount'},
        {href: '/user/tickets', name: 'My ticket'},
        {href: '/user/films', name: 'Films'},
    ],

};

// export let deleteUser =(id) => state.trUsers.splice(+id, 1);
export let deleteUser =() => console.log('user');
export default state;