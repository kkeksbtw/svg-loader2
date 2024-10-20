import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class svgLoader extends DDDSuper(LitElement) {
  static get tag() {
    return "svg-loader";
  }

  constructor() {
    super();
    this.title = "";
  }

  static get properties() {
    return {
      title: { type: String },
      goal: { type: String, reflect: true },
      width: { type: String },
      height: { type: String },
      label: { type: String },
      loading: { type: String, reflect: true },
      fetchPriority: { type: String, reflect: true },
      color: { type: String },
      colorOnly: { type: Boolean },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
          font-size: var(--svg-loader-font-size, var(--ddd-font-size-s));
          width: var(--width, 254px);
          height: var(--height, 254px);
        }

        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
          width: var(--width, 254px);
          height: var(--height, 254px);
        }

        div {
          padding: 0;
          margin: 0;
        }

        img {
          width: 100%;
          height: 100%;
        }
      `,
    ];
  }

  updated(changedProperties) {
    // When a 'goal' is set, update the alt text
    if (changedProperties.has("goal")) {
      this.updateAlt();
    }
  }

  updateAlt() {
    const goal = this.getAttribute("goal");
    switch (goal) {
      case "circle":
        this.label = "Sustainable developments logo";
        break;
      case "all":
        this.label =
          "Goal 1: No poverty, Goal 2: Zero hunger, Goal 3: Good health and well-being, Goal 4: Quality education, Goal 5: Gender equality, Goal 6: Clean water and sanitation, Goal 7: Affordable and clean energy, Goal 8: Decent work and economic growth, Goal 9: Industry, innovation and infrastructure, Goal 10: Reduced inequalities, Goal 11: Sustainable cities and communities, Goal 12: Responsible consumption and production, Goal 13: Climate action, Goal 14: Life below water, Goal 15: Life on land, Goal 16: Peace, justice and strong institutions, Goal 17: Partnerships for the goals";

        break;
      case "1":
        this.label = "Goal 1: No poverty";
        this.color = "rgb(235, 28, 44)";
        break;
      case "2":
        this.label = "Goal 2: Zero hunger";
        this.color = "rgb(210, 160, 42)";
        break;
      case "3":
        this.label = "Goal 3: Good health and well-being";
        this.color = "rgb(44, 155, 72)";
        break;
      case "4":
        this.label = "Goal 4: Quality education";
        this.color = "rgb(194, 31, 51)";
        break;
      case "5":
        this.label = "Goal 5: Gender equality";
        this.color = "rgb(239, 64, 42)";
        break;
      case "6":
        this.label = "Goal 6: Clean water and sanitation";
        this.color = "rgb(0, 173, 216)";
        break;
      case "7":
        this.label = "Goal 7: Affordable and clean energy";
        this.color = "rgb(253, 183, 19)";
        break;
      case "8":
        this.label = "Goal 8: Decent work and economic growth";
        this.color = "rgb(143, 23, 55)";
        break;
      case "9":
        this.label = "Goal 9: Industry, innovation and infrastructure";
        this.color = "rgb(243, 109, 36)";
        break;
      case "10":
        this.label = "Goal 10: Reduced inequalities";
        this.color = "rgb(224, 21, 131)";
        break;
      case "11":
        this.label = "Goal 11: Sustainable cities and communities";
        this.color = "rgb(249, 157, 37)";
        break;
      case "12":
        this.label = "Goal 12: Responsible consumption and production";
        this.color = "rgb(207, 141, 42)";
        break;
      case "13":
        this.label = "Goal 13: Climate action";
        this.color = "rgb(72, 119, 61)";
        break;
      case "14":
        this.label = "Goal 14: Life below water";
        this.color = "rgb(0, 125, 187)";
        break;
      case "15":
        this.label = "Goal 15: Life on land";
        this.color = "rgb(63, 175, 73)";
        break;
      case "16":
        this.label = "Goal 16: Peace, justice and strong institutions";
        this.color = "rgb(1, 85, 138)";
        break;
      case "17":
        this.label = "Goal 17: Partnerships for the goals";
        this.color = "rgb(25, 54, 103)";
        break;
    }
  }

  render() {
    return html` <div class="wrapper">
      <img src="../lib/svgs/goal-1.svg" />
    </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(svgLoader.tag, svgLoader);
