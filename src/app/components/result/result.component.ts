import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() result: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  shareOnTwitter(): void {
    const text = `I just completed a quiz and my result is: ${this.result}. Take the quiz here: https://macfadem.github.io/Quizzao/#/`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, "_blank");
  }

  shareOnLinkedIn(): void {
    const text = `I just completed a quiz and my result is: ${this.result}. Take the quiz here: https://macfadem.github.io/Quizzao/#/`;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://macfadem.github.io/Quizzao/#/')}`, "_blank");
  }

  copyToClipboard(): void {
    const text = `I just completed a quiz and my result is: ${this.result}. Take the quiz here: https://macfadem.github.io/Quizzao/#/`;
    navigator.clipboard.writeText(text).then(function() {
        alert('Result copied to clipboard!');
    }, function(err) {
        alert('Could not copy text: ');
    });
  }
}
