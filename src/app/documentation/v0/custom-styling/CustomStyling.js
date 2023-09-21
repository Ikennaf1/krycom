import CodeClip from '../../../CodeClip';
import Doc from '../../Doc';

const V0CustomStyling = () => {
    return (
        <Doc title="Custom Styling" next="/documentation/v0/custom-icons" prev="/documentation/v0/quick-start">
            <p>
                Blinds ships with a custom dark mode style. But most times, that will not be what you want.<br />
                You may want a style that conforms with your existing UI/UX. This is the reason why there is the ability to provide custom styling to your dark mode.
            </p><br />

            <p>
                To add custom styling to your dark mode, follow the instructions below.
            </p><br />

            <p>
                First you have to import the <em>setBlindsStyles</em> function. If you are using blinds as a script from CDN, you should skip this step.
            </p><br />
            {/* <CodeEmbed title="setBlindsStyles0" width="100%" height="100" script="https://gist.github.com/Ikennaf1/afcdacea739e5513a2e415e738c9191d.js" /> */}
            <div className="w-full max-w-[80vw] sm:max-w-[60vw] md:max-w-[40vw] lg:max-w-[40vw] xl:max-w-[30vw]">
                <CodeClip id="importhooks">
                    {`import { blindsInit, blindsToggle, setBlindsStyles } from 'blinds';`}
                </CodeClip>
            </div>

            <p className="mt-8">
                Use the <em>setBlindsStyles</em> function to set your styles:
            </p><br />
            {/* <CodeEmbed title="setBlindsStyles1" width="100%" height="400" script="https://gist.github.com/Ikennaf1/29bb726c5245028592709233a67eeb5b.js" /> */}
            <div className="w-full max-w-[80vw] sm:max-w-[60vw] md:max-w-[40vw] lg:max-w-[40vw] xl:max-w-[30vw]">
                <CodeClip id="setblindsstyles">
                    {`setBlindStyles({
  "body": {
    "background-color": "black",
    "color": "gray"
  },
  "div .container": {
    "background-color": "black",
    "color": "gray"
  },
  "input [type=\'text\']": {
    "background-color": "black",
    "color": "gray"
  }
});

blindsInit();`}
                </CodeClip>
            </div>

            <p className="mt-6">
                As you can see, there is little difference between normal CSS and the code above. The only difference is that you have to write your styles in JSON format.<br />
                Everything else remains the same, including the CSS selectors, the properties, and their corresponding values.
            </p>
        </Doc>
    );
}

export default V0CustomStyling;
