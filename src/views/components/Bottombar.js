let Bottombar = {
    render: async () => {
        let view =  /*html*/`
        <footer class="footer">
            <div class="content has-text-centered">
                <h3>
                    Javascript Single Page Application 
                </h3>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Bottombar;