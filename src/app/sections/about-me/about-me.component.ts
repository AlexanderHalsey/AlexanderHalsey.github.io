import { Component } from '@angular/core';
import { useTheme } from '@/composables/theme.composable';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent {
  theme = useTheme();
}
