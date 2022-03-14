const ToggleSwitch = () => {
    return (
        <label className="switch relative inline-block h-8 w-16">
            <input
                className="w-0 h-0 hidden"
                type="checkbox" />
            <span
                className="slider round absolute cursor-pointer inset-0 rounded-full"></span>

            <style jsx>
                {
                    `
                      .slider {
                        background-color: #ccc;
                        -webkit-transition: .4s;
                        transition: .4s;
                      }
                      
                      .slider:before {
                        position: absolute;
                        content: "";
                        height: 26px;
                        width: 26px;
                        left: 4px;
                        bottom: 4px;
                        background-color: white;
                        -webkit-transition: .4s;
                        transition: .4s;
                      }
                      
                      input:checked + .slider {
                        background-color: #2196F3;
                      }
                      
                      input:focus + .slider {
                        box-shadow: 0 0 1px #2196F3;
                      }
                      
                      input:checked + .slider:before {
                        -webkit-transform: translateX(26px);
                        -ms-transform: translateX(26px);
                        transform: translateX(26px);
                      }
                      
                      .slider.round:before {
                        border-radius: 50%;
                      }

                    `
                }
            </style>
        </label>
    );
}

export default ToggleSwitch;