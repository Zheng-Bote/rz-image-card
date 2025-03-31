import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { html } from "lit/static-html.js";

@customElement("rz-image-card")
export class RzImageCard extends LitElement {
  @property({ type: String })
  card_img = "/ad.png";

  @property({ type: String })
  card_title: String = "";

  @property({ type: String })
  card_brief: String = this.card_img;

  @property({ type: String })
  card_desc: String = "";

  @property({ type: String })
  card_btn: String = "";

  @property({ type: String })
  card_url_text: String = "";
  @property({ type: String })
  card_url: string = "";

  card_details: String = "Details";

  getDetails() {
    return html`<details>
      <summary>${this.card_details}</summary>
      ${this.card_desc}
    </details>`;
  }

  doIt() {
    //window.location = this.card_btn.toString();
    //document.location.href = this.card_btn.toString();
    console.warn("dev: currently disabled");
  }

  getCard() {
    /*
    let ret;
    if (this.card_btn !== "") {
      ret = html`<button @click="${this.doIt}">${this.card_btn}</button>`;
    }
    */
    let details;
    if (this.card_desc !== "") {
      details = this.getDetails();
    }

    let url;
    if (this.card_url_text !== "" && this.card_url !== "") {
      url = html`see also:
        <a
          href="${this.card_url}"
          alt="${this.card_url}"
          title="${this.card_url}"
          >${this.card_url_text}</a
        >`;
    }

    return html`
      <div class="card">
        <img src=${this.card_img} alt="My product" />
        <div class="card-text">
          <h3>${this.card_title}</h3>
          <p>
            <span class="brief">${this.card_brief}</span><br />
            ${details}
          </p>
          <span class="card_url">${url}</span>
        </div>
      </div>
    `;
  }

  render() {
    return html`${this.getStyles()} ${this.getCard()} `;
  }

  getStyles() {
    return html`
      <style>
        @import url("/rz-image-card/rz-image-card.css");
      </style>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "rz-image-card": RzImageCard;
  }
}
