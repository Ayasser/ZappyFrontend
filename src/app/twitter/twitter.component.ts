import {Component, OnInit} from '@angular/core';
import {GtConfig, GtRow} from '@angular-generic-table/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TwitterService} from './twitter.service';
import {Tweet} from './twitter.model';


@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})


export class TwitterComponent implements OnInit {

  public configObject: GtConfig<any>;
  public Tweets: Tweet[];
  //   id: number,
  //   Created_Date: string,
  //   Tweet_id: string,
  //   Tweet_id_str: string,
  //   Tweet_Date: any,
  //   Tweet_Text: string,
  // }[] = [];

  constructor(private twitterService: TwitterService) {
    this.configObject = {
      settings: [{
        objectKey: 'Tweet_id',
        sort: 'enable',
        columnOrder: 1
      }, {
        objectKey: 'Created_Date',

      }, {
        objectKey: 'Tweet_Date',


      }, {
        objectKey: 'Tweet_Text',


      },],
      fields: [{
        name: 'Tweet_id',
        objectKey: 'Tweet_id'
      }, {
        name: 'Created_Date',
        objectKey: 'Created_Date'
      }, {
        name: 'Tweet_Date',
        objectKey: 'Tweet_Date'
      }, {
        name: 'Tweet_Text',
        objectKey: 'Tweet_Text'
      }],
    };
  }

  ngOnInit() {
    this.twitterService.getTweets().subscribe((re) => {
      this.Tweets = re;
      console.log('---', re);
    });
  };

  OnClickSlack() {
    this.twitterService.onSlack().subscribe((re) => {
      console.log('---', re);
    });
  };

  OnClickTwitter() {
    this.twitterService.onTweet().subscribe((re) => {
      console.log('---', re);
    });
  };
}
