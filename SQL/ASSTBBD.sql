USE [ASSTB]
GO

/****** Object:  Table [asstb].[actualite]    Script Date: 31/08/2022 18:00:15 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[actualite](
	[idact] [int] IDENTITY(1,1) NOT NULL,
	[titreact] [varchar](255) NOT NULL,
	[contenu] [text] NOT NULL,
	[datee] [date] NOT NULL,
	[lien] [text] NOT NULL,
	[image] [text] NOT NULL,
	[namefichier] [text] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idact] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[album]    Script Date: 31/08/2022 18:00:50 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[album](
	[idalbum] [int] IDENTITY(1,1) NOT NULL,
	[nomalbum] [varchar](255) NOT NULL,
	[photo] [text] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idalbum] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[bureau2]    Script Date: 31/08/2022 18:01:07 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[bureau2](
	[idb] [int] IDENTITY(1,1) NOT NULL,
	[nomb] [varchar](255) NOT NULL,
	[prenomb] [varchar](255) NOT NULL,
	[sexe] [varchar](255) NOT NULL,
	[cinb] [int] NOT NULL,
	[posteb] [varchar](255) NOT NULL,
	[datenaissb] [date] NOT NULL,
	[photo] [text] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idb] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[categorie]    Script Date: 31/08/2022 18:01:40 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[categorie](
	[idcategorie] [int] IDENTITY(1,1) NOT NULL,
	[type] [varchar](50) NOT NULL,
	[idsport] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idcategorie] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [asstb].[categorie]  WITH CHECK ADD FOREIGN KEY([idsport])
REFERENCES [asstb].[sport] ([idsport])
ON DELETE CASCADE
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[contact]    Script Date: 31/08/2022 18:02:05 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[contact](
	[idmessage] [int] IDENTITY(1,1) NOT NULL,
	[nom] [varchar](255) NOT NULL,
	[email] [text] NOT NULL,
	[sujet] [text] NOT NULL,
	[message] [text] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idmessage] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[contactpage]    Script Date: 31/08/2022 18:02:31 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[contactpage](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[adresse] [text] NOT NULL,
	[mail] [text] NOT NULL,
	[numero] [varchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[conventions]    Script Date: 31/08/2022 18:03:03 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[conventions](
	[idconv] [int] IDENTITY(1,1) NOT NULL,
	[lien] [text] NOT NULL,
	[namefichier] [text] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idconv] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[equipes]    Script Date: 31/08/2022 18:03:18 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[equipes](
	[idequipe] [int] IDENTITY(1,1) NOT NULL,
	[nomequipe] [varchar](255) NOT NULL,
	[description] [varchar](255) NOT NULL,
	[idsport] [int] NOT NULL,
	[idcategorie] [int] NOT NULL,
	[genre] [varchar](255) NOT NULL,
	[region] [varchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idequipe] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [asstb].[equipes]  WITH CHECK ADD FOREIGN KEY([idcategorie])
REFERENCES [asstb].[categorie] ([idcategorie])
GO

ALTER TABLE [asstb].[equipes]  WITH CHECK ADD FOREIGN KEY([idsport])
REFERENCES [asstb].[sport] ([idsport])
ON DELETE CASCADE
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[event]    Script Date: 31/08/2022 18:03:52 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[event](
	[idevent] [int] IDENTITY(1,1) NOT NULL,
	[titreevent] [varchar](255) NOT NULL,
	[description] [text] NOT NULL,
	[datee] [date] NOT NULL,
	[photo] [text] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idevent] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[events]    Script Date: 31/08/2022 18:04:08 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[events](
	[idevents] [int] IDENTITY(1,1) NOT NULL,
	[nomevent] [varchar](255) NOT NULL,
	[description] [text] NOT NULL,
	[datee] [date] NOT NULL,
	[idevent] [int] NOT NULL,
	[photo] [text] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idevents] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [asstb].[events]  WITH CHECK ADD FOREIGN KEY([idevent])
REFERENCES [asstb].[event] ([idevent])
ON DELETE CASCADE
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[galerie]    Script Date: 31/08/2022 18:04:24 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[galerie](
	[idimage] [int] IDENTITY(1,1) NOT NULL,
	[description] [text] NOT NULL,
	[photo] [text] NOT NULL,
	[idalbum] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idimage] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [asstb].[galerie]  WITH CHECK ADD FOREIGN KEY([idalbum])
REFERENCES [asstb].[album] ([idalbum])
ON DELETE CASCADE
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[image]    Script Date: 31/08/2022 18:04:39 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[image](
	[idimage] [int] NOT NULL,
	[nomimage] [varchar](100) NOT NULL,
	[taille] [int] NOT NULL,
	[type] [text] NOT NULL,
	[bin] [image] NOT NULL,
	[id_catg_img] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idimage] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [asstb].[image] ADD  DEFAULT ('0') FOR [id_catg_img]
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[imageevent]    Script Date: 31/08/2022 18:05:18 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[imageevent](
	[idimageev] [int] IDENTITY(1,1) NOT NULL,
	[photo] [text] NOT NULL,
	[idevents] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idimageev] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [asstb].[imageevent]  WITH CHECK ADD FOREIGN KEY([idevents])
REFERENCES [asstb].[events] ([idevents])
ON DELETE CASCADE
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[joueursasstb]    Script Date: 31/08/2022 18:05:32 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[joueursasstb](
	[idj] [int] IDENTITY(1,1) NOT NULL,
	[nomj] [varchar](255) NOT NULL,
	[prenomj] [varchar](255) NOT NULL,
	[sexe] [varchar](255) NOT NULL,
	[age] [int] NOT NULL,
	[datenaiss] [date] NOT NULL,
	[cin] [int] NOT NULL,
	[poste] [varchar](255) NOT NULL,
	[idequipe] [int] NOT NULL,
	[photo] [text] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idj] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [asstb].[joueursasstb]  WITH CHECK ADD FOREIGN KEY([idequipe])
REFERENCES [asstb].[equipes] ([idequipe])
ON DELETE CASCADE
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[membrebureau]    Script Date: 31/08/2022 18:05:48 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[membrebureau](
	[idb] [int] IDENTITY(1,1) NOT NULL,
	[nomb] [varchar](255) NOT NULL,
	[prenomb] [varchar](255) NOT NULL,
	[sexe] [varchar](255) NOT NULL,
	[cinb] [int] NOT NULL,
	[poste] [varchar](255) NOT NULL,
	[datenaissb] [date] NOT NULL,
	[photo] [text] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idb] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[motpres]    Script Date: 31/08/2022 18:07:19 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[motpres](
	[idmot] [int] IDENTITY(1,1) NOT NULL,
	[nompres] [varchar](255) NOT NULL,
	[prenompres] [varchar](255) NOT NULL,
	[description] [text] NOT NULL,
	[photo] [text] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idmot] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[postebureau]    Script Date: 31/08/2022 18:07:41 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[postebureau](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[poste] [varchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[responsable]    Script Date: 31/08/2022 18:08:07 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[responsable](
	[idresponsable] [int] IDENTITY(16,1) NOT NULL,
	[nomresponsable] [varchar](255) NOT NULL,
	[prenomresponsable] [varchar](255) NOT NULL,
	[cin] [int] NOT NULL,
	[fonction] [varchar](255) NOT NULL,
	[idequipe] [int] NOT NULL,
	[photo] [varchar](max) NOT NULL,
 CONSTRAINT [PK_responsable_idresponsable] PRIMARY KEY CLUSTERED 
(
	[idresponsable] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

EXEC sys.sp_addextendedproperty @name=N'MS_SSMA_SOURCE', @value=N'asstb.responsable' , @level0type=N'SCHEMA',@level0name=N'asstb', @level1type=N'TABLE',@level1name=N'responsable'
GO

USE [ASSTB]
GO

/****** Object:  Table [asstb].[score]    Script Date: 31/08/2022 18:08:36 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[score](
	[idmatch] [int] IDENTITY(1,1) NOT NULL,
	[domicile] [varchar](255) NOT NULL,
	[exterieur] [varchar](255) NOT NULL,
	[butd] [int] NOT NULL,
	[butex] [int] NOT NULL,
	[datee] [date] NOT NULL,
	[idsport] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idmatch] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [asstb].[score]  WITH CHECK ADD FOREIGN KEY([idsport])
REFERENCES [asstb].[sport] ([idsport])
ON DELETE CASCADE
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[sport]    Script Date: 31/08/2022 18:08:53 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[sport](
	[idsport] [int] IDENTITY(1,1) NOT NULL,
	[nomsport] [varchar](255) NOT NULL,
	[description] [text] NOT NULL,
	[photo] [text] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idsport] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[utilisateur]    Script Date: 31/08/2022 18:09:13 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[utilisateur](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[pseudo] [varchar](100) NOT NULL,
	[email] [varchar](100) NOT NULL,
	[password] [text] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[videoacc]    Script Date: 31/08/2022 18:09:28 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[videoacc](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[video] [text] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[videoevent]    Script Date: 31/08/2022 18:09:48 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[videoevent](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[video] [text] NOT NULL,
	[idevents] [int] NOT NULL,
	[nom] [varchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [asstb].[videoevent]  WITH CHECK ADD FOREIGN KEY([idevents])
REFERENCES [asstb].[events] ([idevents])
ON DELETE CASCADE
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[videogalerie]    Script Date: 31/08/2022 18:10:02 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[videogalerie](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[video] [text] NOT NULL,
	[idalbum] [int] NOT NULL,
	[nom] [varchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [asstb].[videogalerie]  WITH CHECK ADD FOREIGN KEY([idalbum])
REFERENCES [asstb].[album] ([idalbum])
ON DELETE CASCADE
GO


USE [ASSTB]
GO

/****** Object:  Table [asstb].[videos]    Script Date: 31/08/2022 18:10:28 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [asstb].[videos](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [text] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO



