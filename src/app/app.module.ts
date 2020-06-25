import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {environment} from '../environments/environment';
/*FireBase*/
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule,AngularFireAuth} from 'angularfire2/Auth';
//components etc
import { LoginComponent } from './component/usuarios/login/login.component';
import { RegistroComponent } from './component/usuarios/registro/registro.component';
import { PerfilComponent } from './component/usuarios/perfil/perfil.component';
import { AngularFirestore,AngularFirestoreDocument} from '@angular/fire/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
/*Componentes*/
import { HomeComponent } from './component/home/home.component';
import { CatalogoComponent } from './component/catalogo/catalogo.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { PreguntasComponent } from './component/preguntas/preguntas.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { RegistrerComponent } from './component/registrer/registrer.component';
/*Angular material*/
import {FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
/*Menu*/
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';


//Servicio
import {AuthService} from './services/auth.service';
import { ProductosComponent } from './component/productos/productos.component';
import { ListaProductosComponent } from './component/productos/lista-productos/lista-productos.component';
import { SistemaProductoComponent } from './component/productos/sistema-producto/sistema-producto.component';
import { ProductoService } from './services/producto.service';

@NgModule({
  declarations: [

    AppComponent,
    AboutComponent,
    CatalogoComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ListaProductosComponent,
    NavbarComponent,
    MenuComponent,
    PerfilComponent,
    PreguntasComponent,
    ProductosComponent,
    RegistrerComponent,
    RegistroComponent,
    SistemaProductoComponent
  ],
  imports: [
    
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
   
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    FlexLayoutModule,
    FormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    DragDropModule,
    LayoutModule
    
  ],
  providers: [AuthService,AngularFirestore,ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
