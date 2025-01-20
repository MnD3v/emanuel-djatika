
class Animations {

    static leftToRight({ duration, direction, delay, inverse }: {
        duration: number, direction?: number, delay?: number, inverse?: boolean
    }) {
        return ({
            hidden: { opacity: 0, x: inverse == true ? 120 : -120, },
            show: {

                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                    duration: duration,
                    delay: delay ?? .2
                },
            },
        });
    };

    static bottomToTop({ duration, inverse, delay }: { duration: number, inverse?: boolean, delay?: number, }) {


        return ({
            hidden: { opacity: 0, y: inverse == true ? -120 : 120, },
            show: {

                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    duration: duration,
                    delay: delay ?? .2
                },
            },
        });
    };
    static opacity({ duration, delay }: { duration: number, delay?: number, }) {

        return ({
            hidden: { opacity: 0, },
            show: {

                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    duration: duration,
                    delay: delay ?? .2
                },
            },
        });
    };

    static scale({ duration, delay }: { duration: number, delay?: number }) {

        return ({
            hidden: { opacity: 0, scale: 0, },
            show: {

                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    duration: duration,
                    delay: delay ?? .2
                },
            },
        });
    };

}



export default Animations; 
