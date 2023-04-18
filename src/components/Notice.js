const Notice = ({ isCorsOn }) => {
    return isCorsOn === false ?
        <div className="p-4 text-center text-sm tracking-wide">You are seeing mock data. Download <a className="underline underline-offset-2" href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf">CORS extension</a> and enable it to see LIVE Swiggy data.</div>
        :
        <div className="p-4 text-center text-sm text-green-800 tracking-wide">You are seeing LIVE Swiggy API data.</div>
}

export default Notice;