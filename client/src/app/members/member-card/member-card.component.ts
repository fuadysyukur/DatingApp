import { Component, Input } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent {
  faUser = faUser;
  faHeart = faHeart
  faEnvelope = faEnvelope
  @Input() member: Member | undefined;

}
