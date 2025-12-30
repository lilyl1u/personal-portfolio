export type Song = {
    id: string
    title: string
    url: string
    artist: string
    album: string
    songName: string
}

export const songs: Song[] = [
    {
        id: '1',
        title: 'Tear',
        url: '/photos/songs/tear.jpg',
        artist: 'Red Hot Chili Peppers',
        album: 'By the Way',
        songName: 'Tear'
    },
    {
        id: '2',
        title: 'Mardy Bum',
        url: '/photos/songs/mardy_bum.jpg',
        artist: 'Arctic Monkeys',
        album: 'Whatever People Say I Am, That\'s What I\'m Not',
        songName: 'Mardy Bum'
    },
    {
        id: '3',
        title: 'Blur',
        url: '/photos/songs/blur.jpg',
        artist: 'The Marias',
        album: 'Superclean, Vol. II',
        songName: 'Blur'
    }
]

