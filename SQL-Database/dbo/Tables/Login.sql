CREATE TABLE [dbo].[Login] (
    [id]       INT            IDENTITY (1, 1) NOT NULL,
    [Email]    NVARCHAR (50)  NOT NULL,
    [Password] NVARCHAR (MAX) NOT NULL,
    [Role]     NVARCHAR (50)  NULL,
    CONSTRAINT [PK_Login] PRIMARY KEY CLUSTERED ([id] ASC)
);

